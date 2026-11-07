from django.db import models

# class Transaction(models.Model):
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     phone_number = models.CharField(max_length=15)
#     timestamp = models.DateTimeField(auto_now_add=True)
#     status = models.CharField(max_length=20, default='pending')
#     checkout_id = models.CharField(max_length=100, unique=True)
#     mpesa_code = models.CharField(max_length=100, blank=True, null=True)

#     def __str__(self):
#         return f"{self.mpesa_code} - {self.amount} KES"
from django.db import models

class Payment(models.Model):
    STATUS = [("PENDING", "Pending"), ("SUCCESS", "Success"), ("FAILED", "Failed")]
    booking_id = models.IntegerField(null=True, blank=True)  # or a ForeignKey to your Booking
    phone = models.CharField(max_length=12)
    amount = models.PositiveIntegerField()
    checkout_request_id = models.CharField(max_length=100, unique=True)
    mpesa_receipt = models.CharField(max_length=30, blank=True)
    status = models.CharField(max_length=10, choices=STATUS, default="PENDING")
    result_desc = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)